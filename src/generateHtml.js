
module.exports = generatePage = (employee) => {

    const team = [];
    // team.push(Manager);
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].getRole() === "Manager") {
            team.push(` 
            <!DOCTYPE html>
            <div class="card" style="width: 10rem;">
                <div class="card-body">         
                    <h5 class="card-title">${employee[i].getName()}</h5>
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
        else if (employee[i].getRole() === "Engineer") {
            team.push(` 
            <div class="card" style="width: 10rem;">
                <div class="card-body">         
                    <h5 class="card-title">${employee[i].getName()}</h5>
                    <p class="card-text">
                    <ul>
                    <li class="employee-id">ID: ${employee[i].getId()} </li>
                    <li class="employee-email">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                    <li class="office"> GitHub: ${employee[i].getGithub()} </li>
                    </p>
                </div>
        </div>
        </HTML>
        `)
        };
    }
    return team.join("");


    //     return `
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    //         rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    //         crossorigin="anonymous">
    //     <link rel="stylesheet" href="./assets/style.css">
    //     <!--This is the banner-->
    //     <div class="jumbotron jumbotron-fluid">
    //         <div class="container">
    //             <h1 class="display-4">My Team</h1>
    //         </div>
    //     </div>
    //     </head>

    //     <body>
    //     <div class="card" style="width: 10rem;">
    //                 <div class="card-body">         
    //                     <h5 class="card-title">${manager[0].getName()}</h5>
    //                     <p class="card-text">
    //                     <ul>
    //                     <li class="employee-id">ID: ${manager[0].getId()} </li>
    //                     <li class="employee-email">Email: <a href="mailto:${manager[0].getEmail()}">${manager[0].getEmail()}</a></li>
    //                     <li class="office"> Office Number: ${manager[0].getOfficeNumber()} </li>
    //                     </p>
    //                 </div>
    //         </div>

    // </body>

    //     `
};