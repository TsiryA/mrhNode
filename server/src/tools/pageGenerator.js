let Generator = {};

Generator.publicPage = (req, res) =>{
  res.send("Send public Page");
}

Generator.privatePage = (req, res) =>{
  res.send("Send private Page");
}

export default Generator;
