import React from'react'

const UserContext = React.createContext('Demon King')
//Demon king will be printed when value is not given.It works as default value
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer 

export {UserProvider,UserConsumer}
export default UserContext