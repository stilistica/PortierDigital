import replace from "gulp-replace";
import plumber from "gulp-plumber"; // не обов'язково
import notify from "gulp-notify"; // не обов'язково
import browsersync from "browser-sync";
import newer from "gulp-newer";


export const plugins = {
  replace: replace,
  plumber: plumber, // не обов'язково
  notify: notify, // не обов'язково
	browsersync: browsersync,
  newer: newer,
};
