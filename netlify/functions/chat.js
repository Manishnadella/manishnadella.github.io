// ─── netlify/functions/chat.js ────────────────────────────────────────────────
// Serverless proxy — keeps your Groq API key secret on the server side.
// Set GROQ_API_KEY in Netlify dashboard → Site Settings → Environment Variables
// ──────────────────────────────────────────────────────────────────────────────

exports.handler = async function (event) {

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Parse request body
  let message, systemPrompt;
  try {
    const body = JSON.parse(event.body);
    message      = body.message;
    systemPrompt = body.systemPrompt;
    if (!message || !systemPrompt) throw new Error('Missing fields');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // API key lives securely in Netlify environment — never in your code
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'GROQ_API_KEY not configured in Netlify environment variables' }) };
  }

  // Call Groq
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model:       'llama-3.1-8b-instant',
        temperature: 0.2,
        max_tokens:  512,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: message }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: err?.error?.message || 'Groq API error' })
      };
    }

    const data  = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error: ' + err.message })
    };
  }
};