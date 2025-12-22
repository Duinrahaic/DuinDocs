"use client";

import { useState } from "react";
import type { Treadmill } from "@/app/types";

type TreadmillsTableProps = {
    treadmills: Treadmill[];
};

export default function TreadmillsTable({ treadmills }: TreadmillsTableProps) {
    const [search, setSearch] = useState("");

    const filteredTreadmills = treadmills.filter((t) => {
        const searchLower = search.toLowerCase();
        return (
            t.Make.toLowerCase().includes(searchLower) ||
            t.Model.toLowerCase().includes(searchLower) ||
            t.Driver.toLowerCase().includes(searchLower) ||
            t.Id.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div className="my-6">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by make, model, driver..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div className="overflow-x-auto border border-border rounded-lg">
                <table className="w-full text-sm">
                    <thead className="bg-muted/50 border-b border-border">
                        <tr>
                            <th className="px-4 py-3 text-left font-semibold">Make</th>
                            <th className="px-4 py-3 text-left font-semibold">Model</th>
                            <th className="px-4 py-3 text-left font-semibold">Driver</th>
                            <th className="px-4 py-3 text-center font-semibold">BLE</th>
                            <th className="px-4 py-3 text-center font-semibold">FTMS</th>
                            <th className="px-4 py-3 text-center font-semibold">Speed</th>
                            <th className="px-4 py-3 text-center font-semibold">FitOSC</th>
                            <th className="px-4 py-3 text-center font-semibold">VRTI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTreadmills.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                                    No treadmills found
                                </td>
                            </tr>
                        ) : (
                            filteredTreadmills.map((t) => (
                                <tr
                                    key={t.Id}
                                    className="border-b border-border hover:bg-muted/30 transition"
                                >
                                    <td className="px-4 py-3 font-medium">{t.Make}</td>
                                    <td className="px-4 py-3">
                                        <div>{t.Model}</div>
                                        {t.SpeedRange && (
                                            <div className="text-xs text-muted-foreground mt-1">
                                                {t.SpeedRange.min}-{t.SpeedRange.max} {t.SpeedRange.unit}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-xs">{t.Driver}</td>
                                    <td className="px-4 py-3 text-center">
                                        {t.Features.bluetooth ? (
                                            <span className="text-green-500">✓</span>
                                        ) : (
                                            <span className="text-red-500">✗</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {t.Features.ftms ? (
                                            <span className="text-green-500">✓</span>
                                        ) : (
                                            <span className="text-red-500">✗</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center text-xs">
                                        {t.Features.speed_read && t.Features.speed_control ? (
                                            <span className="text-green-500">R/W</span>
                                        ) : t.Features.speed_read ? (
                                            <span className="text-blue-500">Read</span>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {t.Applications.fitosc.supported ? (
                                            <span className="text-green-500">✓</span>
                                        ) : (
                                            <span className="text-red-500">✗</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {t.Applications.vrti.supported ? (
                                            <span className="text-green-500">✓</span>
                                        ) : (
                                            <span className="text-red-500">✗</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredTreadmills.length} of {treadmills.length} treadmills
            </div>
        </div>
    );
}
