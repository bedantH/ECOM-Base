import axios from "axios";

export const sendWhatsAppMessage = (body) => axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjQ2NDM2MSI_3D", { ...body }) 