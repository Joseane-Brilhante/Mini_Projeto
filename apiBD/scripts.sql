CREATE TABLE pontos (latlng GEOMETRY);

INSERT INTO pontos (latlng) VALUES (ST_MakePoint(-6.88891113033669, -38.5570393930358))

SELECT ST_AsText(latlng) pontos FROM pontos 