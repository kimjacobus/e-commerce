import React, { useEffect, useState } from 'react'

type TooltipProps = {
  text: string
}

const UseToolTip = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('tooltip position changed!')
  }, [tooltipPosition])

  const handleMouseOver = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    console.log('mouseover ran!')
    setShowTooltip(true)
    setTooltipPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseOut = () => {
    setShowTooltip(false)
  }

  const ToolTip = ({ text }: TooltipProps) => {
    console.log(text)

    return showTooltip ? (
      <div className="tooltip" style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
        <h2>{text}</h2>
      </div>
    ) : (
      <></>
    )
  }
  return { ToolTip, handleMouseOver, handleMouseOut }
}

export default UseToolTip
