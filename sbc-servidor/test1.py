import rdflib
from rdflib.serializer import Serializer
g=rdflib.Graph()
g.parse("Emancipada_final.rdf")
data = {}
for row in g.query(
        'SELECT ?p ?o where { <http://tarea.com/la_emancipada/resource/LaEmancipada>  ?p  ?o}'):
    data[row.p] = row.o
# print(data)
print(g.serialize(format='json-ld', indent=4))