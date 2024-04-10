const handler = (req, res) => {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString(),
      name,
      email,
      text,
    }
    res.status(201).json({ message: "Added comment.", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyComment = [
      { id: 'c1', name: 'Prashant', text: 'my first comment' },
      { id: 'c2', name: 'Devraj', text: 'my second comment' },
      { id: 'c3', name: 'Kiran', text: 'my third comment' },
    ]
    res.status(200).json({comment: dummyComment });
  }
};

export default handler;