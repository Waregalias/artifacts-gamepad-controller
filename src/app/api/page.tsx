'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import Title from '../components/Title'

function ApiPage() {
    const theme = useContext(ThemeContext);

    return (
        <>
            <div className="flex items-center justify-between w-full">
                <span>Test</span>
            </div>
        </>
    )
}

export default ApiPage
