"use client"

// import DataTable from "datatables.net-bs5";
// import jQuery from "jquery";

// import "datatables.net";
var window = global.window;

// import "jquery";
// import $ from "jquery";

 import "datatables.net";
 //import DataTable from "datatables.net-bs5";

 import { useEffect } from "react";

export default function Table({ data } : { data : any}) {
  return <></>
}

/*export default function Table({ data } : { data : any}) {
  useEffect(() => {
    // if (typeof window !== "undefined") {
    $(function () {
      $("#table_id").DataTable({
        data: data,
        columns: [{ data: "name" }, { data: "position" }, { data: "office" }, { data: "extn" }, { data: "start_date" }, { data: "salary" }],
        // buttons: buttons,
        // language: {
        //   zeroRecords: noRecordsText,
        // },
        // autoWidth: true,
        // dom: dom,
        // scrollx: true,
        // ...options,
        //   initComplete: function (settings, json) {
        //     $("table_id").wrap(
        //       "<div style='overflow:auto; width:100%;position:relative;'></div>"
        //     );
        //   },
      });
    });
  }, []);
  return (
    <table
      style={{ paddingTop: 10, width: "100%" }}
      id={"table_id"}
      className="display table table-bordered nowrap compact"
      aria-label="advanced table"
    ></table>
  );
}
*/