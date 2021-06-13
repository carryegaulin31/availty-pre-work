export default () => {
    const [nameFirst, setNameFirst] = useState('')
    const [nameLast, setNameLast] = useState('')
    const [NPI, setNPI] = useState('')
    const [teleNumber, setTeleNumber] = useState('')
    const [email, setEmail] = useState('')
  
    const Submit = () => {
  
    }
  
    // setNameFirst('')
    // setNameLast('')
    // setNPI('')
    // setTeleNumber('')
    // setEmail('')
  
    return (
      <div className="container">
        <div className="main">
          <div className="title">Availty Provider Registration Page</div>
          <div className="form">
            <input
              type="text"
              name="nameFirst"
              id="nameFirst"
              placeholder="Name"
              value={nameFirst}
              onChange={event => setNameFirst(event.target.value)}
            />
            <input
              type="text"
              name="nameLast"
              id="nameLast"
              placeholder="Last Name"
              value={nameLast}
              onChange={event => setNameLast(event.target.value)}
            />
            <input
              type="text"
              name="NPI"
              id="NPI"
              placeholder="NPI"
              value={NPI}
              onChange={event => setNPI(event.target.value)}
            />
            <input
              type="text"
              name="teleNumber"
              id="teleNumber"
              placeholder="Phone No"
              value={teleNumber}
              onChange={event => setTeleNumber(event.target.value)}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <button type="button" name="submit" id="btn" value="submit" onClick={Submit}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
  