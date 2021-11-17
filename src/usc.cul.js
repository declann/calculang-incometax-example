export const usc_co_1_ytd = () => {
  if (t().getYear() == 114) return (10036 / 12) * (1 + t().getMonth());
  // can refactor out a runoff function
  else return (12016 / 12) * (1 + t().getMonth());
};
export const usc_co_2_ytd = () => {
  if (t().getYear() == 114) return (16016 / 12) * (1 + t().getMonth());
  // can refactor out a runoff function
  else return (17576 / 12) * (1 + t().getMonth());
};
export const usc_co_3_ytd = () => {
  if (t().getYear() == 114) return 0;
  // can refactor out a runoff function
  else return (70044 / 12) * (1 + t().getMonth()); // >= 2015
};

export const usc_liab_ytd = () => {
  return (
    (annual_salary() >= 10036) *
      (Math.min(gross_salary_ytd(), usc_co_1_ytd()) *
        (t().getYear() == 114 ? 0.02 : 0.015) +
        Math.max(
          0,
          Math.min(
            usc_co_2_ytd() - usc_co_1_ytd(),
            gross_salary_ytd() - usc_co_1_ytd()
          )
        ) *
          (t().getYear() == 114 ? 0.04 : 0.035) +
        Math.max(0, gross_salary_ytd() - usc_co_2_ytd()) * 0.07) +
    (t().getYear() != 114) *
      Math.max(0, gross_salary_ytd() - usc_co_3_ytd()) *
      0.01
  ); // 8% above CO 3 2015
  // TODO 2015 self-assessed rate of 11% above 100k (from 10% 2014)
};

export const usc_liab = () => {
  if (t().getDate() == 1 && t().getMonth() == 0) return usc_liab_ytd();
  return usc_liab_ytd() - usc_liab_ytd({ t_in: addMonths(t(), -1) });
};
