import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <header className="bg-primary p-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-white">Fitness Goal Tracker</h1>
            <p className="text-white mb-0">Track your progress daily</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section">
          {/* Stats Summary Section */}
          <h2 className="mb-4">Your Weekly Stats</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Completed Goals</h3>
                <p className="text-success" style={{ fontSize: "2rem", marginBottom: 0 }}>2</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Average Progress</h3>
                <p className="text-primary" style={{ fontSize: "2rem", marginBottom: 0 }}>68%</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Total Goals</h3>
                <p className="text-secondary" style={{ fontSize: "2rem", marginBottom: 0 }}>4</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="mb-4">Your Goals</h2>
          
          {/* Static Sample Goals */}
          <div className="grid gap-4">
            {/* Goal 1 */}
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between">
                  <h3 className="card-title">Daily Steps</h3>
                  <span className="text-muted">steps</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div className="progress-bar bg-success" style={{ width: "95%" }}>95%</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Target: 10,000 steps</span>
                  <span>Current: 9,500 steps</span>
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="text-muted">Created on: Apr 1, 2025</span>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>

            {/* Goal 2 */}
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between">
                  <h3 className="card-title">Weekly Running</h3>
                  <span className="text-muted">km</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "60%" }}>60%</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Target: 25 km</span>
                  <span>Current: 15 km</span>
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="text-muted">Created on: Mar 25, 2025</span>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>

            {/* Goal 3 */}
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between">
                  <h3 className="card-title">Weight Loss</h3>
                  <span className="text-muted">kg</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div className="progress-bar bg-warning" style={{ width: "40%" }}>40%</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Target: 5 kg</span>
                  <span>Current: 2 kg</span>
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="text-muted">Created on: Mar 28, 2025</span>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>

            {/* Goal 4 */}
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between">
                  <h3 className="card-title">Daily Calorie Burn</h3>
                  <span className="text-muted">kcal</span>
                </div>
                <div className="progress mb-3" style={{ height: "20px" }}>
                  <div className="progress-bar bg-info" style={{ width: "75%" }}>75%</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Target: 2500 kcal</span>
                  <span>Current: 1875 kcal</span>
                </div>
                <div className="mt-3 flex justify-between">
                  <span className="text-muted">Created on: Mar 22, 2025</span>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="grid grid-cols-2 gap-4">
            {/* Add Goal Form */}
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Add New Goal</h3>
                <form>
                  <div className="mb-2">
                    <label className="block mb-1">Goal Title:</label>
                    <input
                      type="text"
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1">Target Value:</label>
                    <input
                      type="number"
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1">Unit:</label>
                    <input
                      type="text"
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1">Category:</label>
                    <select
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    >
                      <option>steps</option>
                      <option>distance</option>
                      <option>weight</option>
                      <option>calories</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Add Goal</button>
                </form>
              </div>
            </div>

            {/* Record Progress Form */}
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Record Progress</h3>
                <form>
                  <div className="mb-2">
                    <label className="block mb-1">Select Goal:</label>
                    <select
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    >
                      <option value="">Select a goal</option>
                      <option>Daily Steps</option>
                      <option>Weekly Running</option>
                      <option>Weight Loss</option>
                      <option>Daily Calorie Burn</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1">Progress Value:</label>
                    <input
                      type="number"
                      className="p-2"
                      style={{ display: "block", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Record Progress</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-light p-4 mt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
        <div className="container">
          <p className="text-secondary text-center" style={{ marginBottom: 0, fontSize: "0.875rem" }}>
            © 2025 Fitness Goal Tracker | Atteignez vos objectifs fitness quotidiens
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
