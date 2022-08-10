const generatePage = (newTeam) => {

    const team = [];
    team.push(newTeam);
    return `
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
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    </head>

    <body>
<div>
<div class="card" style="width: 10rem;">
<div class="card-body">
<h2 class="card-title">${manager.getName()}</h2>
<p class="card-text>
<ul>
<li> ${manager.getId()}</li>
<li <a href="mailto: ${manager.getEmail()}</p>
<li>${manager.getOfficeNumber()}</li>
</div>

</body>

    `
};