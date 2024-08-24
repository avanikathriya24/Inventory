import React from "react";
import "../InventoryContent/InventoryContent.css"; // Import custom CSS for styling
import { Card, Button, CloseButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryContent = () => {
  const navigate = useNavigate();
  
  return (
    <div className="main-div">
      <div className="content-div">
        <h2 className="title">Inventory Management</h2>
        <p className="text-muted">Manage your inventory efficiently</p>
      </div>

      <div className="inventory-content">
        {/* Add Item Card */}
        <div className="card inventory-card">
          <div className="backgrounddiv">
            <h2>Add Item</h2>
          </div>
          <div className="">
            <i className="bi bi-plus-circle" style={{ fontSize: "2rem" }}></i>
            <p>Click the button below to add a new item.</p>
            <Button className="inv-btn" onClick={() => navigate("/itemform")}>
              Add Item
            </Button>
          </div>
        </div>

        {/* Add Composite Item Card */}
        <div className="card inventory-card">
          <div className="backgrounddiv">
            <h2>Add Composite Item</h2>
          </div>
          <div className="">
            <i className="bi bi-box-seam" style={{ fontSize: "2rem" }}></i>
            <p>Click the button below to add a composite item.</p>
            <Button className="inv-btn" onClick={() => navigate("/compositeform")}>
              Add Composite Item
            </Button>
          </div>
        </div>

        {/* View Low Stock Item Card */}
        <div className="card inventory-card full-width">
          <div className="backgrounddiv">
            <h2>Low Stock items</h2>
          </div>
          <div className="">
            <i className="bi bi-exclamation-triangle" style={{ fontSize: "2rem" }}></i>
            <p>Click the button below to view items with low stock.</p>
            <Button className="inv-btn" onClick={() => navigate("/low-stock-items")}>
              View Low Stock Items
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
