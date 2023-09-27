teste =  () => {
    let val = document.querySelector(".num").value
    const antes = document.querySelector("#escolha").value
    const depois = document.querySelector("#para").value


switch (antes) {
    case "qui": val = val * 1000
        break;
    case "cen": val = val / 100
        break;
    case "mili": val = val / 1000
        break;
    default: val;
        break;
}

switch (depois) {
    case "qui": val = val / 1000
        break;
    case "metro": val = val / 100
        break;
    case "mili": val = val * 1000
        break;
    case "cen": val = val * 100
        break;
}
document.querySelector(".result").innerHTML = `${val}`
}
