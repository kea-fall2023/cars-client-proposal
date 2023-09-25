import { API_URL } from "../../settings.js"
import { handleHttpErrors,sanitizeStringWithTableRows } from "../../utils.js"
const URL = API_URL + "/cars/adminnnn"

export async function initCars() {

  try {
    const cars = await fetch(URL).then(handleHttpErrors)
    //document.getElementById("table-rows").onclick = gotoToAddEditView
    const carRows = cars.map(car => `
<tr>
<td>${car.id}</td>
<td>${car.brand}</td>
<td>${car.model}</td>
<td>${car.pricePrDay}</td>
<td>${car.bestDiscount}</td>
<td><button id="${car.id}_column-id" class="btn btn-sm btn-secondary">Edit/delete</button> </td>      
</tr>
`).join("\n")

    //You should ALWAYS do this from now on
    const safeRows = sanitizeStringWithTableRows(carRows);
    document.getElementById("table-rows").innerHTML = safeRows
  } catch (err) {
      document.getElementById("error").innerText = err.message
      console.error(err.message)
    }
  }

