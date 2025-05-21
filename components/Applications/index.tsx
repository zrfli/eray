"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image  from "next/image";

export function Application() {
    const [loading, setLoading] = useState(false);
    const [tc, setTc] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    
    const handleAction = async () => { setLoading(true) }

    return (
        <Sheet onOpenChange={(isOpen) => { if (!isOpen) setTc(""); setName(""); setPhone(""); setLoading(false); }}>
            <SheetTrigger asChild>
                <p className="underline font-light text-white text-sm md:text-lg cursor-pointer">Üye Ol!</p>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Parti Üye Başvuru Formu</SheetTitle>
                    <SheetDescription>
                        “Milletin Sesi, Hürriyetin Güvencesi!” diyen İstiklal ve Hürriyet Partisi’ne katılın.
                    </SheetDescription>
                </SheetHeader>
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="h-56 w-96 rounded-xl border p-2 shadow-xl">
                            <div className="flex h-full flex-col gap-4">
                            <div className="flex justify-center items-center">
                                <Label>İstiklal ve Hürriyet Partisi Kimlik Kartı</Label>
                            </div>
                            <div className="flex space-x-5 ml-2">
                                <div className="min-w-0">
                                    <Image src="/logo.png" className="mb-2 w-14" alt="" width={400} height={400}loading="lazy" decoding="async" />
                                </div>
                                <div className="min-w-0">
                                <div className="pt-1">
                                    <div>
                                        <p className="text-xs font-medium text-black">Üye No</p>
                                        <p className="border-b border-black text-xs font-medium text-black">{Math.floor(Math.random() * 999999)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-black">Adı Soyadı</p>
                                        <p className="border-b border-black text-xs font-medium text-black">{name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-black">T.C. Kimlik Numarası</p>
                                        <p className="border-b border-black text-xs font-medium text-black">{tc}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-black">Telefon Numarası</p>
                                        <p className="border-b border-black text-xs font-medium text-black">{phone}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-4 py-4 w-full h-full justify-center">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="tc" className="text-right">T.C. Kimlik Numarası</Label>
                            <Input id="tc" className="col-span-3" onChange={(e) => setTc(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Adı Soyadı</Label>
                            <Input id="name" className="col-span-3" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">Telefon Numarası</Label>
                            <Input id="phone" className="col-span-3" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <Button className="cursor-pointer" onClick={() => handleAction()}>Gönder</Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}