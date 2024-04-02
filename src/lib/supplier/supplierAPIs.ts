// 'use server'
// import {CreateSupplier, Supplier, UpdatedSupplier} from "@/lib/supplier/data";
// import {revalidateTag} from "next/cache";
//
// export async function getAllSuppliers() {
//     try {
//         const res = await fetch('http://localhost:8080/api/supplier/',{ next: { tags: ['supplier'] }})
//         if (!res.ok) {
//             throw new Error('Failed to fetch data')
//         }
//         return res.json()
//     }catch (e) {
//         console.log(e)
//     }
//
// }
//
// export async function getOneSupplier(id: number): Promise<Supplier> {
//     const res = await fetch(`http://localhost:8080/api/supplier/${id}`)
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }
//
//
// export async function createSupplier(formData: CreateSupplier) {
//     try {
//         const res:Response = await fetch('http://localhost:8080/api/supplier/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });
//
//         const data = await res.json();
//         revalidateTag('supplier');
//         return data;
//     }catch (e) {
//         console.log(e)
//     }
//
// }
//
// export async function updateSupplier(formData: UpdatedSupplier, id : number): Promise<Supplier> {
//     const res:Response = await fetch(`http://localhost:8080/api/supplier/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     });
//
//     const data = await res.json();
//     revalidateTag('supplier');
//     return data;
// }
//
// export async function DeleteSupplier(id: number) {
//     try{
//         const res = await fetch(`http://localhost:8080/api/supplier/${id}`,{
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//
//         });
//         if (!res.ok) {
//             throw new Error('Failed to delete supplier')
//         }
//         revalidateTag('supplier');
//         return res.json()
//     }catch (e) {
//         console.log(e)
//     }
//
// }