import React, { ReactNode } from 'react'

import { useDataContext } from '@/context/dataContext'
import { TABS } from '@/types'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

interface HeaderProps {
  children: ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const { tabActive, setTabActive, isFormValid } = useDataContext()

  const tabs: { value: TABS; label: string }[] = [
    { value: 'bag', label: 'Sacola' },
    { value: 'payment', label: 'Pagamento' },
    { value: 'confirmation', label: 'Confirmação' },
  ]

  return (
    <Tabs
      value={tabActive}
      className="fixed top-0 left-0 w-full h-full bg-light-gray"
    >
      <TabsList className="flex justify-between bg-white items-center rounded-none shadow-md p-4 space-x-0 xl:px-96">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className={`relative text-center flex-grow ${
              tabActive === tab.value
                ? 'border-b-4 border-black rounded-none bottom-[-2px]'
                : 'border-b-2 border-gray-400 rounded-none bottom-[-3px]'
            }`}
            value={tab.value}
            onClick={() => {
              if (tab.value === 'confirmation' && !isFormValid) {
                setTabActive('payment')
              } else {
                setTabActive(tab.value)
              }
            }}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={`h-full w-screen mt-0 ${
            tabActive === 'confirmation' ? 'pb-64' : 'pb-72'
          } xl:px-96`}
        >
          {children}
        </TabsContent>
      ))}
    </Tabs>
  )
}
