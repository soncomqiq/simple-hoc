import React from "react";

function sonterSort(arr, desc = true) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (desc) {
                if (arr[i] > arr[j]) {
                    const tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            } else {
                if (arr[i] < arr[j]) {
                    const tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
    }
}

function addHeader(WrappedComponent, name) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <WrappedComponent sonterSort={sonterSort} />
                    <h1 style={{ fontSize: "24px" }}>Created By {name}</h1>
                </>
            );
        }
    };
}

export default addHeader;