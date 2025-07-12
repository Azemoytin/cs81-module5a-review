// https://github.com/Azemoytin/cs81-module5a-review

// An array of objects representing the hobbies for different days
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// SUGGESTION: I think renaming totalTime into getTotalMinutes is better because it tells you what unit is being returned while making the code a bit more clearer.
function totalTime(log) {
// calculates the total time spent on hobbies
  return log.reduce((sum, session) => sum + session.minutes, 0);
// uses reduce() to gather the total minutes from each session
}

function uniqueHobbies(log) {
// returns an array for the hobby names
  const names = log.map(entry => entry.hobby);
// uses map() to put just the hobby names into a new array
  return [...new Set(names)];
// Set() removes duplicates and spreads them back into an array
}

function longSessions(log, minMinutes) {
// reports sessions that lasted longer than the given number
  return log.filter(entry => entry.minutes > minMinutes);
// Uses filter() to only have the hobbies that were longer than minMinutes
}

function countMood(log, moodType) {
// counts how the specific number of moods
  return log.filter(entry => entry.mood === moodType).length;
// Uses filter() to match with the given mood, then returns the function
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
// New Test
console.log("Sessions longer than 40 min:", longSessions(hobbyLog, 40));

