-- build the Rhythm Code database
--

CREATE TABLE rhythms (
    id		    serial PRIMARY KEY,
    title	    VARCHAR(255),
    url		    VARCHAR(512),
    location	VARCHAR(255)
);

INSERT INTO rhythms (title, url, location) VALUES('DC Hand dancing','https://www.youtube.com/watch?v=M6uM0qrjetQ','washington DC');
INSERT INTO rhythms (title, url, location) VALUES('Rumba Guaguanco','https://www.youtube.com/watch?v=gJVT_5swkhA','Havana, Cuba');
