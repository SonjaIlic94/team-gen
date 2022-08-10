
module.exports = generatePage = (employee) => {

    const team = [];
    // run through array seeking manager
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].getRole() === "Manager") {
            team.push(` 
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                crossorigin="anonymous">
            <link rel="stylesheet" href="./assets/style.css">
            <!--This is the banner-->
            <div class="jumbotron jumbotron-fluid bg-info text-center">
                <div class="container">
                    <h1 class="display-4">My Team</h1>
                </div>
            </div>
            <div class="card d-inline-block" style="width: 10rem;">
                <div class="card-body">         
                    <h3 class="card-title">${employee[i].getName()}</h3>
                    <h4>Manager</h4>
                    <p class="card-text">
                    <ul>
                    <li class="employee-id">ID: ${employee[i].getId()} </li>
                    <li class="employee-email">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                    <li class="office"> Office Number: ${employee[i].getOfficeNumber()} </li>
                    </p>
                </div>
        </div>
        </HTML>
        `)
        }
        //run through array seeking engineer
        else if (employee[i].getRole() === "Engineer") {
            team.push(` 
            <div class="card d-inline-block" style="width: 10rem;">
                <div class="card-body">         
                    <h3 class="card-title">${employee[i].getName()}</h3>
                    <h4>Engineer</h4>
                    <p class="card-text">
                    <ul>
                    <li class="employee-id">ID: ${employee[i].getId()} </li>
                    <li class="employee-email">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                    <li class="git"> GitHub: ${employee[i].getGithub()} </li>
                    </p>
                </div>
        </div>
        </HTML>
        `)
        }
        //run thru arry seeking intern
        else if (employee[i].getRole() === "Intern") {
            team.push(` 
            <div class="card d-inline-block" style="width: 10rem;">
                <div class="card-body">         
                    <h3 class="card-title">${employee[i].getName()}</h3>
                    <h4>Intern</h4>
                    <p class="card-text">
                    <ul>
                    <li class="employee-id">ID: ${employee[i].getId()} </li>
                    <li class="employee-email">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                    <li class="school"> School: ${employee[i].getSchool()} </li>
                    </p>
                </div>
        </div>
        </HTML>
        `)
        }
    }
    return team.join("");
};