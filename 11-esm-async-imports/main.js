const SUPPORTED_LANGUAGES = ["el", "en"];
//run this file like node main.js en
const selectedLanguage = process.argv[2];

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.error("The specified language is not supported");
  process.exit(1);
}

const translationModule = `./strings-${selectedLanguage}.js`; // ①
import(translationModule).then((strings) => {
  console.log(strings.HELLO);
});
