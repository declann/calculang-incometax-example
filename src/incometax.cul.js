import addYears from 'date-fns/esm/addYears';
import addMonths from 'date-fns/esm/addMonths';
//import { range } from 'underscore'

import {
  usc_co_1_ytd,
  usc_co_2_ytd,
  usc_co_3_ytd,
  usc_liab,
  usc_liab_ytd,
} from './usc.cul.js';

export { usc_co_1_ytd, usc_co_2_ytd, usc_co_3_ytd, usc_liab, usc_liab_ytd };

// explicit inputs:
export const annual_salary = () => annual_salary_in;
export const addl_credit = () => addl_credit_in;
export const t = () => t_in;

export const gross_salary = () => {
  if (t().getDate() == 1) return annual_salary() / 12;
  else return 0;
};

export const gross_salary_ytd = () => {
  if (t().getDate() == 1 && t().getMonth() == 0) return gross_salary();
  else
    return (
      gross_salary_ytd({
        t_in: addMonths(t(), -1),
      }) + gross_salary()
    );
};

export const paye_co_ytd = () => {
  if (t().getYear() == 114) return (32800 / 12) * (1 + t().getMonth());
  else return (33800 / 12) * (1 + t().getMonth());
};

export const paye_credit_ytd = () => {
  return ((1650 * 2 + (addl_credit() ? 2000 : 0)) / 12) * (1 + t().getMonth());
};

export const paye_liab_ytd = () => {
  return Math.max(
    0,
    Math.min(gross_salary_ytd(), paye_co_ytd()) * 0.2 +
      Math.max(0, gross_salary_ytd() - paye_co_ytd()) *
        (t().getYear() == 114 ? 0.41 : 0.4) -
      paye_credit_ytd()
  );
};

export const paye_liab = () => {
  if (t().getDate() == 1 && t().getMonth() == 0) return paye_liab_ytd();
  return paye_liab_ytd() - paye_liab_ytd({ t_in: addMonths(t(), -1) });
};

export const prsi_liab_ytd = () => {
  return (
    (gross_salary_ytd() + 0) /* bik */ *
    0.04 *
    (annual_salary() > (352 * 365.25) / 7)
  ); // exemption limit
  // how is exemption limit applied in practical terms - is using annual_salary here a hack ?
};

export const prsi_liab = () => {
  if (t().getDate() == 1 && t().getMonth() == 0) return prsi_liab_ytd();
  return prsi_liab_ytd() - prsi_liab_ytd({ t_in: addMonths(t(), -1) });
};

export const net_salary = () =>
  gross_salary() - paye_liab() - usc_liab() - prsi_liab();

export const net_salary_ytd = () =>
  gross_salary_ytd() - paye_liab_ytd() - usc_liab_ytd() - prsi_liab_ytd();

export const income_tax_ytd = () =>
  paye_liab_ytd() + usc_liab_ytd() + prsi_liab_ytd();
