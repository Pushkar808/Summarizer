"use client"
import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import { FaShareAlt } from 'react-icons/fa'
import { IoIosPrint, IoIosRefresh, IoIosShareAlt } from 'react-icons/io'

export default function Page() {
    return (
        <div className='text-black md:grid grid-cols-2 grid-rows-1 gap-10 px-4 py-2 h-full'>
            <section className='w-full h-full bg-white border-[1.5px] border-black rounded-lg shadow-sm md:m-0 mb-6'>
                <div className='p-6 break-all flex md:flex-row flex-col gap-4'>
                    <div>
                        <img src="images/Loader.png" className='w-10 h-10 rounded-full' />
                    </div>
                    <div>
                        <h1 className='font-bold mt-1 text-lg mb-1'>Blog Heading Goes here</h1>
                        <p className="text-sm text-gray-500 my-2">
                            Blog: <a href="#" className="text-blue-600 underline">https://example.com/blog-post</a>
                        </p>
                        <div className='py-2'>
                            <span className="bg-gray-100 text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">DeepSeek Model</span>
                            <span className="bg-gray-100 text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">DeepSeek Model</span>
                            <span className="bg-gray-100 text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">DeepSeek Model</span>
                        </div>
                        <div className='border-t-1 border-gray-200 py-2 flex gap-4'>
                            <button className="px-5 py-1 text-xs border border-blue-600 rounded-xl hover:cursor-pointer  flex gap-2 items-center">Refresh <IoIosRefresh /></button>
                            <button className="px-5 py-1 text-xs border border-blue-600 rounded-xl hover:cursor-pointer flex gap-2 items-center">Share <IoIosShareAlt /></button>
                            <button className="px-5 py-1 text-xs border border-blue-600 rounded-xl hover:cursor-pointer  flex gap-2 items-center">Print <IoIosPrint /></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-white border-[1.5px] border-black rounded-lg shadow-sm  h-full'>
                <div className='p-6 flex md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 w-full flex flex-col items-center '>
                        <h5 className=''>Content score</h5>
                        <div className='w-full h-full'>
                            <ReactSpeedometer
                                width={200}
                                height={100}
                                maxValue={100}
                                value={50}
                                labelFontSize="0px"
                                fluidWidth
                                valueTextFontSize='10px'
                            />
                        </div>

                    </div>
                    <div className='border-[1px] border-gray-300 w-full px-4 rounded'>
                        <div className='border-b-[1.5px] border-gray-300 py-2 font-semibold text-sm'>Meta Keyword in title:</div>
                        <div className='border-b-[1.5px] border-gray-300 py-2 font-semibold text-sm'>Meta Keyword in title:</div>
                        <div className='border-b-[1.5px] border-gray-300 py-2 font-semibold text-sm'>Meta Keyword in title:</div>
                        <div className='py-2 font-semibold text-sm'>Meta Keyword in title:</div>
                    </div>
                </div>
            </section>
            <section className="bg-white w-full rounded-xl shadow-md p-6 my-6 border-[1.5px] border-black col-span-2">
                {/* Summary Header */}
                <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Summary</h2>

                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Updated: Just now</span>
                        <button className="px-3 py-1 text-sm border rounded-md bg-gray-100 hover:bg-gray-200">Refresh</button>
                    </div>
                </div>

                {/* Summary Content */}
                <div className="mt-6">
                    <p className="text-gray-700 leading-relaxed">
                        This article discusses the fundamentals of product-centric organizations, outlining the difference between product- and customer-centric models. It highlights the benefits of aligning company goals with product innovation, operational strategy, and long-term customer satisfaction.
                    </p>
                </div>

                {/* Tone Detection */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Tone Analysis</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg shadow text-center">
                            <p className="text-sm text-gray-500">Tone</p>
                            <p className="text-lg font-bold text-indigo-600">Informative</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow text-center">
                            <p className="text-sm text-gray-500">Confidence</p>
                            <p className="text-lg font-bold text-green-500">High</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow text-center">
                            <p className="text-sm text-gray-500">Sentiment</p>
                            <p className="text-lg font-bold text-yellow-500">Neutral</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow text-center">
                            <p className="text-sm text-gray-500">Clarity</p>
                            <p className="text-lg font-bold text-blue-500">Excellent</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
