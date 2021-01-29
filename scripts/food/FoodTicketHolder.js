const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        if(customEvent.detail.purchasedTicket === "Ticket") {

            // console.log("heard")
            contentTarget.innerHTML +=`<div class="person eater"></div>`
        }
    })