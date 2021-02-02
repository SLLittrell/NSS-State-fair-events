const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        if(customEvent.detail.purchasedTicket === "Ticket") {

            // console.log("heard")
            contentTarget.innerHTML +=`<div class="person gawker"></div>`
        }
    })