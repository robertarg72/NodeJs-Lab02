var name = "Robert Argume";

function getCourseName() {
    return "Enterprise Technologies";
}

function getProfessorName() {
    return "Viktor";
}
function getDateTime() {
    return Date();
}

function getDeveloperName() {
    return name;
}
module.exports = {  getCourseName: getCourseName, 
                    getProfessorName: getProfessorName,
                    getDeveloperName: getDeveloperName,
                    getDateTime
                };