
import { baseUrl} from "../variables.js"

// import { baseUrl, eventsQuantity } from "../variables.js";

async function getAndExtractEvents(userName) {
const response = await fetch (`${baseUrl}/${userName}/events?`)
const events = await response.json();
  
// Filtra eventos para manter apenas CreateEvent e PushEvent
const filteredEvents = events.filter(events => events.type === 'CreateEvent' || events.type === 'PushEvent');

//   // Extrai informações relevantes dos eventos
const extractedInfo = filteredEvents.map(events => {
if (events.repo && events.payload && events.payload.commits && events.payload.commits.length > 0) {
const repositoryName = events.repo.name;
const commitMessage = events.payload.commits[0].message;

return {
      repoName: repositoryName,
      message: commitMessage,
      };
    } else {
      return null;
     }
   });

   return extractedInfo.filter(info => info !== null);
 }

 export { getAndExtractEvents };