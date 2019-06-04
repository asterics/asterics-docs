import chalk from "chalk";

const logger = (col, lbl) => {
  return (text, opts = { end: "\n", label: lbl }) => {
    return `${col(opts.label)} ${text}${opts.end}`;
  };
};

export const warn = logger(chalk.yellow, "warning");
export const info = logger(chalk.blue, "info");
export const error = logger(chalk.red, "error");
export const success = logger(chalk.green, "success");
export const message = logger(chalk.white, "message");
