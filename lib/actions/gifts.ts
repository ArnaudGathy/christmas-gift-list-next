"use server";

export async function addGift(formData: FormData) {
  console.log("formData", formData);
}

export async function claimGift(id: number) {
  console.log("claim gift id", id);
}

export async function unClaimGift(id: number) {
  console.log("UN claim gift id", id);
}

export async function removeGift(id: number) {
  console.log("delete", id);
}
