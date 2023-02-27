import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    
    await prisma.$connect()
    
    await prisma.user.create({
        data:{
            name:"Manoj"
        }
    })

    return NextResponse.json({
        'status':'success'
    })
}