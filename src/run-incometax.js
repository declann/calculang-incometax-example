var incometax = require('./incometax');

console.log(
  incometax.net_salary_ytd({
    t_in: new Date(2014, 1, 1),
    annual_salary_in: 30000,
    addl_credit_in: false,
  })
);
