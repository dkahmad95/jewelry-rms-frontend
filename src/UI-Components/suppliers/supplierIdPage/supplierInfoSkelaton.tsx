import React from "react";

export function SupplierInfoSkeleton() {
    return (
        <div className="w-full mx-auto rounded-lg overflow-hidden bg-gray-50 animate-pulse">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Loading...</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-600">
                    {/* Render skeleton lines for each data */}
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
            </div>
            <div className="flex justify-end gap-3 pb-4 pr-4">
                {/* Placeholder for buttons */}
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}