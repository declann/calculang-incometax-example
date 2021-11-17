var incometax = require('./incometax');

console.log(
  incometax.net_salary_ytd({
    t_in: new Date(2014, 11, 1),
    annual_salary_in: 30000,
    addl_credit_in: false,
  })
);

console.log(
  incometax.net_salary_ytd({
    t_in: new Date(2014, 10, 1),
    annual_salary_in: 30000,
    addl_credit_in: false,
  })
);

console.log(
  incometax.net_salary({
    t_in: new Date(2014, 10, 1),
    annual_salary_in: 30000,
    addl_credit_in: false,
  })
);
