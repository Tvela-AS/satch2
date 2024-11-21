import z from "zod";
export const registerSchema = z.object({
  firstName: z
    .string({ message: "Du må gi oss et fornavn" })
    .min(3, { message: "Gi meg et gyldig fornavn" }),
  lastName: z
    .string({ message: "Du må gi oss et etternavn" })
    .min(1, { message: "Gi meg et gyldig etternavn" }),
  email: z.string().email({ message: "Du må gi en riktig e-post" }),
  message: z.string({ message: "Vær vennlig og gi meg en beskjed" }).min(5, {
    message: "Det er veldig hyggelig hvis du gir meg en beskjed 😁",
  }),
});
