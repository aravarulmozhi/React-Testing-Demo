/* eslint-disable testing-library/prefer-screen-queries */
import React from "react"
import {render,fireEvent} from '@testing-library/react'
import Counter from "../Counter"
test("counter starts at 0",()=>{
    const {getByTestId}= render(<Counter/>)
    expect(getByTestId("count-value")).toHaveTextContent("Count: 0")
})


test("counter increments",()=>{
    const {getByTestId}=render(<Counter/>)
    const incremntButton=getByTestId("increment-button")
    fireEvent.click(incremntButton)
    expect(getByTestId("count-value")).toHaveTextContent("Count: 1")
})

test("counter decrement", ()=>{
    const {getByTestId}=render(<Counter/>)
    const decrementButton=getByTestId("decrement-button")
    fireEvent.click(decrementButton)
    expect(getByTestId("count-value")).toHaveTextContent("Count: -1")
})