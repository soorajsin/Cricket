const API_KEY = "2626215f-99f1-4bc9-b6aa-d9562a492fb6";

//api for current matches
export const currentMatchesList = () => {
          const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;
          return url;
}