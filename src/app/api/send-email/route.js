import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

  const { nome, celular, carro, cor, location, mensagem } = body;

  if (!nome || !celular) {
    return new Response(JSON.stringify({ message: 'Campos obrigatórios não preenchidos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rickornelas.ho@gmail.com',
    subject: `Novo Orçamento - ${nome}`,
    html: `
      <!-- ... o mesmo conteúdo HTML do seu email ... -->
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Celular:</strong> ${celular}</p>
      <p><strong>Carro:</strong> ${carro || 'Não informado'}</p>
      <p><strong>Cor:</strong> ${cor || 'Não informado'}</p>
      <p><strong>Localização:</strong> ${location || 'Não informado'}</p>
      <p><strong>Mensagem:</strong> ${mensagem || 'Sem mensagem adicional.'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email enviado com sucesso!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return new Response(JSON.stringify({ message: 'Erro interno ao enviar email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
