
function showData(data) {

    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()

    let headerRow = table.append("tr")

    headerRow.append("th").text("date/time")
    headerRow.append("th").text("city")
    headerRow.append("th").text("state")
    headerRow.append("th").text("country")
    headerRow.append("th").text("shape")
    headerRow.append("th").text("comments")
    

    let tableBody = table.append("tbody")

    data.forEach((d) => {
       let row = tableBody.append("tr")
       row.append("td").text(d.datetime)
       row.append("td").text(d.city)
       row.append("td").text(d.state)
       row.append("td").text(d.country)
       row.append("td").text(d.shape)
       row.append("td").text(d.comments)
    })
}

function handleClick() {
    let datetime = d3.select("#date-filter-input").property("value")
    let filteredData = data.filter((d) => d.datetime === datetime)

    showData(filteredData)
}

d3.select("#filter-btn").on("click", handleClick)