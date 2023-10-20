import React, { useState, useEffect } from "react";
import DualRangeSlider from "./DualRangeSlider";

const RhythmsWithSlider = ({
	rhythms,
	filteredRhythms,
	setFilteredRhythms,
}) => {
	const [selectedRange, setSelectedRange] = useState([1400, 2023]);

	// Update rhythms when user change the slider
	// This strictly just shows the rhythms in selected range(for now!)
	useEffect(() => {
		const updatedRhythms = rhythms.filter((rhythm) => {
			const rhythmStartYear = parseInt(rhythm.year_start);
			const rhythmEndYear = parseInt(rhythm.year_end);
			return (
				rhythmStartYear >= selectedRange[0] && rhythmEndYear <= selectedRange[1]
			);
		});
		setFilteredRhythms(updatedRhythms);
	}, [selectedRange]);

	return (
		<div>
			<DualRangeSlider
				selectedRange={selectedRange}
				onChangeRange={setSelectedRange}
			/>
			<div style={{ display: "flex", flexDirection: "column" }}>
				{filteredRhythms.map((rhythm, index) => (
					<div key={index} style={{ display: "flex", alignItems: "center" }}>
						<div
							// all inline styles are just for testing
							style={{
								width: "20px",
								height: "20px",
								backgroundColor: "blue",
								borderRadius: "50%",
								marginRight: "10px",
							}}
						></div>
						<span>
							{rhythm.title} {rhythm.timePeriod}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default RhythmsWithSlider;
