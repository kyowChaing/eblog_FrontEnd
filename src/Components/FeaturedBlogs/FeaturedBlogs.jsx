import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

// import { DocumentationSee } from "../documentation";
// import { nodes } from "../data";

function FeaturedBlogs() {

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Blogs />
            </QueryClientProvider>
        </>
    )
}

function Blogs(){
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/allblogs').then((res) =>
                res.json(),
            ),
    })

    // const data = { nodes };

    const theme = useTheme(getTheme());

    const sort = useSort(
        data,
        {
            onChange: onSortChange,
        },
        {
            sortFns: {
                TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
                DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
                TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
                COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
                TASKS: (array) =>
                    array.sort((a, b) => (a.data || []).length - (b.data || []).length),
            },
        }
    );

    function onSortChange(action, state) {
        console.log(action, state);
    }

    const COLUMNS = [
        {
            label: "Task",
            renderCell: (item) => item.name,
            sort: { sortKey: "TASK" },
        },
        {
            label: "Deadline",
            renderCell: (item) =>
                item.deadline.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                }),
            sort: { sortKey: "DEADLINE" },
        },
        {
            label: "Type",
            renderCell: (item) => item.type,
            sort: { sortKey: "TYPE" },
        },
        {
            label: "Complete",
            renderCell: (item) => item.isComplete.toString(),
            sort: { sortKey: "COMPLETE" },
        },
        {
            label: "Tasks",
            renderCell: (item) => item.data?.length,
            sort: { sortKey: "TASKS" },
        },
    ];

    return (
        <>
            <CompactTable columns={COLUMNS} data={data} theme={theme} sort={sort} />

            <br />
            {/* <DocumentationSee anchor={"Features/Sort"} /> */}
        </>
    )
}

export default FeaturedBlogs