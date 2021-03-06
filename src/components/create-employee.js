import React, { Component } from 'react';
import {
	ReactiveBase,
	SingleDropdownRange,
	ResultCard,
	ReactiveList,
} from '@appbaseio/reactivesearch';
class CreateEmployee extends React.Component{

    constructor(props) {
        super(props)
    }

    modifyQuery = (req) => {
        console.log(req);
        return req;
    }

    render() {
        return(
            <ReactiveBase
		app="good-books-ds"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
		enableAppbase
        transformRequest={(req)=> {
			console.log(req);
            let obj = JSON.parse(req?.body);
            if(obj.query) {
                obj.track_total_hits = true;
            }
            return {...req, body: JSON.stringify(obj)};
        }}
	>
		<div className="row reverse-labels">
			<div className="col">
				<SingleDropdownRange
					componentId="BookSensor"
					dataField="average_rating"
					title="SingleDropdownRange"
					data={[
						{ start: 0, end: 3, label: 'Rating < 3' },
						{ start: 3, end: 4, label: 'Rating 3 to 4' },
						{ start: 4, end: 5, label: 'Rating > 4' },
					]}
				/>
			</div>
			<div className="col" style={{ backgroundColor: '#fafafa' }}>
				<ReactiveList
					componentId="SearchResult"
					dataField="original_title"
					size={10}
					pagination
					URLParams
					react={{
						and: 'BookSensor',
					}}
					render={({ data }) => (
						<ReactiveList.ResultCardsWrapper>
							{data.map(item => (
								<ResultCard key={item.id}>
									<ResultCard.Image src={item.image} />
									<ResultCard.Title>
										<div
											className="book-title"
											dangerouslySetInnerHTML={{
												__html: item.original_title,
											}}
										/>
									</ResultCard.Title>

									<ResultCard.Description>
										<div className="flex column justify-space-between">
											<div>
												<div>
													by{' '}
													<span className="authors-list">
														{item.authors}
													</span>
												</div>
												<div className="ratings-list flex align-center">
													<span className="stars">
														{Array(item.average_rating_rounded)
															.fill('x')
															.map((
																item, // eslint-disable-line
																index,
															) => (
																<i
																	className="fas fa-star"
																	key={index} // eslint-disable-line
																/>
															))}
													</span>
													<span className="avg-rating">
														({item.average_rating} avg)
													</span>
												</div>
											</div>
											<span className="pub-year">
												Pub {item.original_publication_year}
											</span>
										</div>
									</ResultCard.Description>
								</ResultCard>
							))}
						</ReactiveList.ResultCardsWrapper>
					)}
				/>
			</div>
		</div>
	</ReactiveBase>
        )
    }
	
};

export default CreateEmployee;