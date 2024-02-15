'use server'

import { revalidatePath } from "next/cache"

import prisma from "./prismadb"

export async function create(formData: FormData) {
  const input = formData.get('input') as string

  if (!input.trim()) {
    return
  }

  await prisma.post.create({
    data: {
      description: input,
    }
  })

  revalidatePath('/');
}


export async function edit(formData: FormData) {
  const input = formData.get('NewDescription') as string
  const inputId = formData.get('inputId') as string

  await prisma.post.update({
    where: {
      id: inputId,
    },
    data: {
      description: input,
    }
  })

  revalidatePath('/')
}


export async function remove(formData: FormData) {
  const inputId = formData.get('inputId') as string

  await prisma.post.delete({
    where: {
      id: inputId,
    }
  })

  revalidatePath('/')
}