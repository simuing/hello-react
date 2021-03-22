const { ADMIN_PASS: adminPass } = process.env;

exports.checkLogin = (ctx, next) => {
    if(!ctx.session.logged) {
        ctx.status = 401; // Uauthorized
        return null;
    }
    return next();
};