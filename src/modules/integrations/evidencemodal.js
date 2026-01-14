// src/modules/riskAssessment/EvidenceModal.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from "@material-ui/core";

const PAGE_SIZE = 5;

const Evidence_Modal = ({ open, onClose, evidence }) => {
  const [page, setPage] = useState(0);

  const paginatedData = evidence.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Evidence (Raw JSON)</DialogTitle>

      <DialogContent dividers>
        <pre style={{ fontSize: 12, whiteSpace: "pre-wrap" }}>
          {JSON.stringify(paginatedData, null, 2)}
        </pre>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>

          <Button
            disabled={(page + 1) * PAGE_SIZE >= evidence.length}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Evidence_Modal;
