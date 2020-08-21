module.exports = (ctx, next) => {
    console.log("policies canOnlyUpdateSelf")
    const currentUser = ctx.state.user
    console.log("policies currentUser", currentUser)

    console.log("policies ctx.params", ctx.params)

    const requestId = ctx.params.id 

    if(currentUser.id.toString() === requestId){
        return next()
    }

    ctx.unauthorized("You can only update your own profile") 
}